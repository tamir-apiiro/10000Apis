
const express = require('express')
import {handler4286} from "./handler4286";
const app = express()
app.get('/4286', handler4286)
app.listen(3000, () => {})
        