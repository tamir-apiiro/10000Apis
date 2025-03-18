
const express = require('express')
import {handler6678} from "./handler6678";
const app = express()
app.get('/6678', handler6678)
app.listen(3000, () => {})
        