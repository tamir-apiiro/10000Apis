
const express = require('express')
import {handler6428} from "./handler6428";
const app = express()
app.get('/6428', handler6428)
app.listen(3000, () => {})
        