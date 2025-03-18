
const express = require('express')
import {handler6094} from "./handler6094";
const app = express()
app.get('/6094', handler6094)
app.listen(3000, () => {})
        