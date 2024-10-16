# Copyright (c) Meta Platforms, Inc. and affiliates.
# All rights reserved.
#
# This source code is licensed under the BSD-style license found in the
# LICENSE file in the root directory of this source tree.

from typing import List

import torch

"""
Set of simple utilities for translating between torch.memory_format and dim_order
"""


def _get_contiguous_dim_order(ndim: int) -> List[int]:
    if ndim <= 0:
        raise AssertionError(f"Unsupported rank: {ndim}")

    return list(range(ndim))


def _get_channels_last_dim_order(ndim: int) -> List[int]:
    if ndim == 4:
        return [0, 2, 3, 1]

    raise AssertionError(f"Unsupported rank: {ndim}")


def get_memory_format(dim_order: List[int]) -> torch.memory_format:
    """
    Given a dim_order try to map it to torch.memory_format
    """
    if dim_order == _get_contiguous_dim_order(len(dim_order)):
        return torch.contiguous_format
    elif len(dim_order) == 4 and dim_order == _get_channels_last_dim_order(
        len(dim_order)
    ):
        return torch.channels_last

    raise AssertionError(
        f"Failed to map a given dim_order: {dim_order} to a torch.memory_format"
    )


def get_dim_order(memory_format: torch.memory_format, ndim: int) -> List[int]:
    """
    Given a memory_format and a tensor rank, generate a dim_order
    """
    if memory_format == torch.contiguous_format:
        return _get_contiguous_dim_order(ndim)
    elif memory_format == torch.channels_last:
        return _get_channels_last_dim_order(ndim)

    raise AssertionError(
        f"Failed to generate dim_order for a given memory format: {memory_format}"
    )
