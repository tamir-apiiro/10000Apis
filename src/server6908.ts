
const express = require('express')
import {handler6908} from "./handler6908";
const app = express()
app.get('/6908', handler6908)
app.listen(3000, () => {})
        