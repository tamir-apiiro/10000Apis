
const express = require('express')
import {handler6990} from "./handler6990";
const app = express()
app.get('/6990', handler6990)
app.listen(3000, () => {})
        