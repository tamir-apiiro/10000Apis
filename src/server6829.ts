
const express = require('express')
import {handler6829} from "./handler6829";
const app = express()
app.get('/6829', handler6829)
app.listen(3000, () => {})
        