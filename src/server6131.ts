
const express = require('express')
import {handler6131} from "./handler6131";
const app = express()
app.get('/6131', handler6131)
app.listen(3000, () => {})
        