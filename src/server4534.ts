
const express = require('express')
import {handler4534} from "./handler4534";
const app = express()
app.get('/4534', handler4534)
app.listen(3000, () => {})
        