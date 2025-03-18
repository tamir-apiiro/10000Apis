
const express = require('express')
import {handler6972} from "./handler6972";
const app = express()
app.get('/6972', handler6972)
app.listen(3000, () => {})
        