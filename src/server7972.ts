
const express = require('express')
import {handler7972} from "./handler7972";
const app = express()
app.get('/7972', handler7972)
app.listen(3000, () => {})
        