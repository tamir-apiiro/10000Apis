
const express = require('express')
import {handler4346} from "./handler4346";
const app = express()
app.get('/4346', handler4346)
app.listen(3000, () => {})
        