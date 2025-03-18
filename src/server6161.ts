
const express = require('express')
import {handler6161} from "./handler6161";
const app = express()
app.get('/6161', handler6161)
app.listen(3000, () => {})
        