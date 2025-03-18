
const express = require('express')
import {handler6789} from "./handler6789";
const app = express()
app.get('/6789', handler6789)
app.listen(3000, () => {})
        