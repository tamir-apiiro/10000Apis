
const express = require('express')
import {handler6399} from "./handler6399";
const app = express()
app.get('/6399', handler6399)
app.listen(3000, () => {})
        