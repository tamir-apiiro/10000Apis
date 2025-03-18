
const express = require('express')
import {handler4581} from "./handler4581";
const app = express()
app.get('/4581', handler4581)
app.listen(3000, () => {})
        