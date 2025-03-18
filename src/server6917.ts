
const express = require('express')
import {handler6917} from "./handler6917";
const app = express()
app.get('/6917', handler6917)
app.listen(3000, () => {})
        