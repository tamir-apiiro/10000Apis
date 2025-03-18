
const express = require('express')
import {handler6577} from "./handler6577";
const app = express()
app.get('/6577', handler6577)
app.listen(3000, () => {})
        