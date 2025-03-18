
const express = require('express')
import {handler4708} from "./handler4708";
const app = express()
app.get('/4708', handler4708)
app.listen(3000, () => {})
        