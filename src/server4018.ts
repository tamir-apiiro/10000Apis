
const express = require('express')
import {handler4018} from "./handler4018";
const app = express()
app.get('/4018', handler4018)
app.listen(3000, () => {})
        