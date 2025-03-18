
const express = require('express')
import {handler6440} from "./handler6440";
const app = express()
app.get('/6440', handler6440)
app.listen(3000, () => {})
        