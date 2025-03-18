
const express = require('express')
import {handler4285} from "./handler4285";
const app = express()
app.get('/4285', handler4285)
app.listen(3000, () => {})
        