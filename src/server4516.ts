
const express = require('express')
import {handler4516} from "./handler4516";
const app = express()
app.get('/4516', handler4516)
app.listen(3000, () => {})
        