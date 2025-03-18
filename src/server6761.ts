
const express = require('express')
import {handler6761} from "./handler6761";
const app = express()
app.get('/6761', handler6761)
app.listen(3000, () => {})
        