
const express = require('express')
import {handler4459} from "./handler4459";
const app = express()
app.get('/4459', handler4459)
app.listen(3000, () => {})
        