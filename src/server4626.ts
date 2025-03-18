
const express = require('express')
import {handler4626} from "./handler4626";
const app = express()
app.get('/4626', handler4626)
app.listen(3000, () => {})
        