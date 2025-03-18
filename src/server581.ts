
const express = require('express')
import {handler581} from "./handler581";
const app = express()
app.get('/581', handler581)
app.listen(3000, () => {})
        