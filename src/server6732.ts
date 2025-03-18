
const express = require('express')
import {handler6732} from "./handler6732";
const app = express()
app.get('/6732', handler6732)
app.listen(3000, () => {})
        