
const express = require('express')
import {handler6470} from "./handler6470";
const app = express()
app.get('/6470', handler6470)
app.listen(3000, () => {})
        