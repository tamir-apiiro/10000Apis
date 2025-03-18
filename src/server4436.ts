
const express = require('express')
import {handler4436} from "./handler4436";
const app = express()
app.get('/4436', handler4436)
app.listen(3000, () => {})
        