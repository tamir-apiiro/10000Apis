
const express = require('express')
import {handler6773} from "./handler6773";
const app = express()
app.get('/6773', handler6773)
app.listen(3000, () => {})
        