
const express = require('express')
import {handler4097} from "./handler4097";
const app = express()
app.get('/4097', handler4097)
app.listen(3000, () => {})
        