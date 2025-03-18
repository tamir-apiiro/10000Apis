
const express = require('express')
import {handler6040} from "./handler6040";
const app = express()
app.get('/6040', handler6040)
app.listen(3000, () => {})
        