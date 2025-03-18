
const express = require('express')
import {handler1062} from "./handler1062";
const app = express()
app.get('/1062', handler1062)
app.listen(3000, () => {})
        