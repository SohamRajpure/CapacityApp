{
  "nbformat": 4,
  "nbformat_minor": 0,
  "metadata": {
    "colab": {
      "provenance": [],
      "authorship_tag": "ABX9TyMXEaQdQ+FTMzLS0Xl2XMOf",
      "include_colab_link": true
    },
    "kernelspec": {
      "name": "python3",
      "display_name": "Python 3"
    },
    "language_info": {
      "name": "python"
    }
  },
  "cells": [
    {
      "cell_type": "markdown",
      "metadata": {
        "id": "view-in-github",
        "colab_type": "text"
      },
      "source": [
        "<a href=\"https://colab.research.google.com/github/SohamRajpure/CapacityApp/blob/main/squares.py\" target=\"_parent\"><img src=\"https://colab.research.google.com/assets/colab-badge.svg\" alt=\"Open In Colab\"/></a>"
      ]
    },
    {
      "cell_type": "code",
      "execution_count": null,
      "metadata": {
        "id": "PcuT8nwCE81P"
      },
      "outputs": [],
      "source": [
        "import numpy\n",
        "import torch\n",
        "\n",
        "## You only need to complete the two functions .\n",
        "def numpy_squares ( k ) :\n",
        "  \"\"\" return (1 , 4 , 9 , ... , k^2) as a numpy array \"\"\"\n",
        "  # your code here\n",
        "  arr = numpy.arange(1,k+1) **2\n",
        "  return arr\n",
        "\n",
        "\n",
        "def torch_squares ( k ) :\n",
        "  \"\"\" return (1 , 4 , 9 , ... , k^2) as a torch array \"\"\"\n",
        "  # your code here\n",
        "  arr = torch.arange(1,k+1) **2\n",
        "  return arr"
      ]
    }
  ]
}