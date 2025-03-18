
const express = require('express')
import {handler6352} from "./handler6352";
const app = express()
app.get('/6352', handler6352)
app.listen(3000, () => {})
        