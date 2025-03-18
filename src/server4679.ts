
const express = require('express')
import {handler4679} from "./handler4679";
const app = express()
app.get('/4679', handler4679)
app.listen(3000, () => {})
        