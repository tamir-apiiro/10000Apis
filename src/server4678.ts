
const express = require('express')
import {handler4678} from "./handler4678";
const app = express()
app.get('/4678', handler4678)
app.listen(3000, () => {})
        