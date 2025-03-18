
const express = require('express')
import {handler6610} from "./handler6610";
const app = express()
app.get('/6610', handler6610)
app.listen(3000, () => {})
        