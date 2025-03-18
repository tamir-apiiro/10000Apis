
const express = require('express')
import {handler972} from "./handler972";
const app = express()
app.get('/972', handler972)
app.listen(3000, () => {})
        