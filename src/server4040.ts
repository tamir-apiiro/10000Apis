
const express = require('express')
import {handler4040} from "./handler4040";
const app = express()
app.get('/4040', handler4040)
app.listen(3000, () => {})
        