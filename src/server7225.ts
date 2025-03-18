
const express = require('express')
import {handler7225} from "./handler7225";
const app = express()
app.get('/7225', handler7225)
app.listen(3000, () => {})
        