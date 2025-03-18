
const express = require('express')
import {handler4184} from "./handler4184";
const app = express()
app.get('/4184', handler4184)
app.listen(3000, () => {})
        