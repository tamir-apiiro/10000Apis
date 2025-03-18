
const express = require('express')
import {handler4139} from "./handler4139";
const app = express()
app.get('/4139', handler4139)
app.listen(3000, () => {})
        