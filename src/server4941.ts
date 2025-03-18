
const express = require('express')
import {handler4941} from "./handler4941";
const app = express()
app.get('/4941', handler4941)
app.listen(3000, () => {})
        