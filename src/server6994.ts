
const express = require('express')
import {handler6994} from "./handler6994";
const app = express()
app.get('/6994', handler6994)
app.listen(3000, () => {})
        