
const express = require('express')
import {handler6845} from "./handler6845";
const app = express()
app.get('/6845', handler6845)
app.listen(3000, () => {})
        