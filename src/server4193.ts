
const express = require('express')
import {handler4193} from "./handler4193";
const app = express()
app.get('/4193', handler4193)
app.listen(3000, () => {})
        