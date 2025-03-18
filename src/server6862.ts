
const express = require('express')
import {handler6862} from "./handler6862";
const app = express()
app.get('/6862', handler6862)
app.listen(3000, () => {})
        