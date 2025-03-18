
const express = require('express')
import {handler6298} from "./handler6298";
const app = express()
app.get('/6298', handler6298)
app.listen(3000, () => {})
        