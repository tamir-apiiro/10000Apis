
const express = require('express')
import {handler6642} from "./handler6642";
const app = express()
app.get('/6642', handler6642)
app.listen(3000, () => {})
        