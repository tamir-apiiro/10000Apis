
const express = require('express')
import {handler6294} from "./handler6294";
const app = express()
app.get('/6294', handler6294)
app.listen(3000, () => {})
        