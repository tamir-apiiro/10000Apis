
const express = require('express')
import {handler4281} from "./handler4281";
const app = express()
app.get('/4281', handler4281)
app.listen(3000, () => {})
        